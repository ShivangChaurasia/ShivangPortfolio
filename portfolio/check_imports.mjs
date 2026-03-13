import fs from 'fs';
import path from 'path';

function checkDirectory(dir) {
    const files = fs.readdirSync(dir, { withFileTypes: true });
    for (const file of files) {
        const fullPath = path.join(dir, file.name);
        if (file.isDirectory()) {
            checkDirectory(fullPath);
        } else if (fullPath.endsWith('.js') || fullPath.endsWith('.jsx')) {
            const content = fs.readFileSync(fullPath, 'utf8');
            const importRegex = /import\s+.*?from\s+['"]([^'"]+)['"]/g;
            let match;
            while ((match = importRegex.exec(content)) !== null) {
                const importPath = match[1];
                if (importPath.startsWith('.')) {
                    // It's a relative import
                    const resolvedPath = path.resolve(dir, importPath);
                    // Check possible extensions
                    const extensions = ['', '.js', '.jsx', '/index.js', '/index.jsx'];
                    let found = false;
                    for (const ext of extensions) {
                        const checkPath = resolvedPath + ext;
                        if (fs.existsSync(checkPath)) {
                            // Now check exact case
                            const dirName = path.dirname(checkPath);
                            const baseName = path.basename(checkPath);
                            const actualFiles = fs.readdirSync(dirName);
                            if (!actualFiles.includes(baseName)) {
                                console.log(`Case mismatch in ${fullPath}: import '${importPath}' resolves to actual file '${baseName}' but case differs.`);
                            }
                            found = true;
                            break;
                        }
                    }
                    if (!found) {
                        console.log(`Could not find imported file: ${fullPath} -> ${importPath}`);
                    }
                }
            }
        }
    }
}

checkDirectory('./src');
console.log('Done checking imports.');
