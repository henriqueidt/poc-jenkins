pipeline {
    agent any
    tools {nodejs "recent node"}
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
                sh "npm run build"
            }
        }
    }
     post{
          always{
               echo "pipeline concluded."
          }
          success{
               echo "all stages executed with success."
          }
     }
}