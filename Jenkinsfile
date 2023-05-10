pipeline {
    agent any
    tools {nodejs "recent node"}
    stages {
        stage('Build') { 
            steps {
                echo "building states"
                sh 'node -v' 
                sh 'npm install'
                sh "npm run build"
            }
        }
         stage('Test') { 
            steps {
                echo "testing stage"
                sh "npm test"
            }
        }
         
         stage('Deploy') { 
            input {
                message "Do you want to deploy this build to production?"
                submitter "dev"
                parameters {
                    choice(name: 'CHOICE', choices: ['yes', 'no'], description: 'Select one')
                }
            } 
            
            steps {
                echo "Choice: ${CHOICE}"
                script {
                    if(CHOICE == 'yes') {
                        echo "Deploying..."
                        sh 'docker build . -t poc-jenkins'
                        sh 'docker run -d --name nodejs-app-container -p 3000:3000 poc-jenkins'
                    } else {
                        echo 'Deployment cancelled'
                        currentBuild.result = 'ABORTED'
                    }
                }
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