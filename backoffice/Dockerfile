# Use the official MongoDB base image from Docker Hub
FROM mongo:latest

# Set the working directory in the container
WORKDIR /data

# Expose the default MongoDB port
EXPOSE 27017

# Copy any initial setup files (optional)
# COPY ./initdb /docker-entrypoint-initdb.d

# Default command to run MongoDB server
CMD ["mongod"]
