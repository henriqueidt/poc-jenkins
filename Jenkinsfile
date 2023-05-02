pipeline {
    agent any
    tools {nodejs "recent node"}
    stages {
        stage('setup docker') {
            steps {
                sh '''imageName=test:${BUILD_NUMBER}
                    containerName=test
                    docker system prune -af
                    docker build -t $imageName .
                    docker stop $containerName || true && docker rm -f $containerName || true
                    docker run -p 3000:3000 -d --name $containerName $imageName           
                '''
            }
        }
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