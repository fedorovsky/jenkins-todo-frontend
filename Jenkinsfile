def IMAGE_NAME = 'todo-fontend'
def CONTAINER_NAME = 'todo-fontend' 

pipeline {
    agent any
    stages {
        stage('Stop container') {
            steps {
                sh "docker stop ${CONTAINER_NAME} || true"
            }
        }
        stage('Remove image') {
            steps {
                sh "docker rmi ${IMAGE_NAME} || true"
            }
        }
        stage('Build image') {
            steps {
                sh "docker build -t ${IMAGE_NAME} ."
            }
        }
        stage('Run Docker') {
            steps {
                sh "docker run -d -p 80:80 --rm --name ${CONTAINER_NAME} ${IMAGE_NAME}"
            }
        }
    }
}