#!/bin/sh

# Check if output file is provided
if [ $# -eq 0 ]; then
    echo "Usage: $0 <output_markdown_file>"
    exit 1
fi

output_file="$1"

# Create or clear the output file
> "$output_file"

# Find all .ts files in the current directory and subdirectories
find . -name "*.ts" | while read -r ts_file; do
    # Extract filename without path and extension
    filename=$(basename "$ts_file" .ts)
    
    # Add a markdown header with the filename
    echo "## $filename" >> "$output_file"
    echo "" >> "$output_file"
    
    # Add the file content wrapped in a code block
    echo '```typescript' >> "$output_file"
    cat "$ts_file" >> "$output_file"
    echo '\n```' >> "$output_file"
    echo "" >> "$output_file"
done

echo "Content from .ts files has been extracted to $output_file"
