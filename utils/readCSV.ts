import fs from 'fs';
import path from 'path';
import {parse} from 'csv-parse/sync';

    export function readCSVData(filePath: string) {
    // Resolve path from project root so 'data/testdata.csv' works from any folder
    const absolutePath = path.resolve(process.cwd(), filePath);
    const fileContent = fs.readFileSync(absolutePath, 'utf-8');
    return parse (fileContent, {
        columns: true,
        skip_empty_lines: true,
        trim: true
    });
}