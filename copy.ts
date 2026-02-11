import { promises as fs } from "fs";
import path from "path";

const SOURCE_DIR = "/www/wwwroot/hexo_Science-Blog/public";
const TARGET_DIR =
    "/opt/1panel/apps/openresty/openresty/www/sites/blog.rezedge.com/index";

async function ensureDir(dir: string) {
    await fs.mkdir(dir, { recursive: true });
}

async function copyDirectoryContents(srcDir: string, destDir: string) {
    await ensureDir(destDir);

    const entries = await fs.readdir(srcDir, { withFileTypes: true });

    for (const entry of entries) {
        const srcPath = path.join(srcDir, entry.name);
        const destPath = path.join(destDir, entry.name);

        if (entry.isDirectory()) {
            await copyDirectoryContents(srcPath, destPath);
        } else if (entry.isFile()) {
            await fs.copyFile(srcPath, destPath);
        } else if (entry.isSymbolicLink()) {
            const realPath = await fs.readlink(srcPath);
            await fs.symlink(realPath, destPath);
        }
    }
}

async function main() {
    try {
        console.log("Starting copy...");
        await copyDirectoryContents(SOURCE_DIR, TARGET_DIR);
        console.log("Copy completed successfully.");
    } catch (err) {
        console.error("Copy failed:", err);
        process.exit(1);
    }
}

main();
