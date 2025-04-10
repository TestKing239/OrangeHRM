pipeline {
    agent any



    triggers {
        cron('0 4 * * *') // This runs at 10:00 AM IST
    }
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
                sh 'npx cypress run --spec "cypress/e2e/hkms.cy.js"'
            }
        }

        stage('Result') {
            steps {
                archiveArtifacts artifacts: 'cypress/videos/**/*.*' 
            }
        }
    }
}
