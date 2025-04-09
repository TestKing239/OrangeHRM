pipeline {
 agent any

tools{
  nodejs "NodeJs 18"
}

stages{

 stage('1st Stage'){
  steps{
   git url: 'https://github.com/TestKing239/OrangeHRM.git' , branch : 'main'
       }
     }
stage('Install dependency'){
 steps{
     sh 'npm install'
   }
  } 

stage('Run Code'){
 stpes{
sh 'npx cypress run'
 }
}


stage('Result'){
 steps {
   archiveArtifacts artifacts: 'cypress/videos/**/*.*,
 }
}


   }
}
