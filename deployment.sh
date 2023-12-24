#!/bin/bash

# Set the branch name where you want to push the changes
TARGET_BRANCH="deployment"

# Run yarn build to build the project
yarn build

# Check if the build was successful
if [ $? -eq 0 ]; then
  echo "Build successful."

  # Add and commit the build files
  git add .
  git commit -m "Build project"

  # Push to the specified branch
  git push origin HEAD:$TARGET_BRANCH
  if [ $? -eq 0 ]; then
    echo "Push to $TARGET_BRANCH successful."
  else
    echo "Error pushing to $TARGET_BRANCH."
  fi

else
  echo "Build failed."
fi
