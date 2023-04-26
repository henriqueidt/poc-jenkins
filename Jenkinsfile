pipeline {
    agent any
    tools {nodejs "node"}
    stages {
        stage('Build') { 
            steps {
                echo "building states"
                sh 'node -v' 
                sh 'npm install' 
            }
        }
         stage('Test') { 
            steps {
                echo "testing stage"
                sh "npm test"
            }
        }
         
         stage('Deploy') { 
            steps {
                echo "Deploying..."
            }
        }
    }
     post{
          always{
               echo "pipeline concluded."
          }
          success{
               echo "all stages executed with success."
               sh 'npm start'
          }
     }
}