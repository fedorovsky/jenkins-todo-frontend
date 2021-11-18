pipeline {
    agent any
    stages {
        stage('Stop container') {
            steps {
                sh 'docker stop todo-frontend || true'
            }
        }
        stage('Remove image') {
            steps {
                sh 'docker rmi todo-frontend || true'
            }
        }
        stage('Build image') {
            steps {
                sh 'docker build -t todo-frontend .'
            }
        }
        stage('Run Docker') {
            steps {
                sh 'docker run -d -p 80:80 --rm --name todo-frontend todo-frontend'
            }
        }
    }
}