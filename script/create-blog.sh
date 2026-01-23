#!/bin/bash

# Script to create a new blog post
# Usage: ./script/create-blog.sh "<title of the blog>"

if [ $# -eq 0 ]; then
    echo "Usage: $0 \"<title of the blog>\""
    exit 1
fi

TITLE="$1"
SLUG=$(echo "$TITLE" | tr '[:upper:]' '[:lower:]' | sed 's/ /-/g' | sed 's/[^a-z0-9-]//g')

DIR="content/blog/$SLUG"

if [ -d "$DIR" ]; then
    echo "Directory $DIR already exists!"
    exit 1
fi

mkdir -p "$DIR"
DATE=$(date +"%Y-%m-%dT%H:%M:%S")

cat > "$DIR/index.md" << EOF
---
title: $TITLE
date: $DATE
description: ""
tags:
---
EOF

echo "Created new blog post at $DIR/index.md"