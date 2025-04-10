pipeline {
    agent any

    tools {
        nodejs "NodeJs 18"
    }

    stages {
        stage('1st Stage') {
            steps {
                git url: 'https://github.com/TestKing239/OrangeHRM.git', branch: 'main'
            }
        }

        stage('Install dependency') {
            steps {
                sh 'npm install'
            }
        }

        stage('Run Code') {
            steps { // corrected 'stpes' to 'steps'
                sh 'npx cypress run --spec "cypress/e2e/hkms.cy.js"' // fixed Windows-style path and spec flag
            }
        }

        stage('Result') {
            steps {
                archiveArtifacts artifacts: 'cypress/videos/**/*.*' // fixed syntax
            }
        }
    }
}
