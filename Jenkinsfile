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
            steps {
                input message: "Do you want to deploy this build to production?",
                    submitter: "dev",
                    parameters: [
                        choice(choices: [
                            'Yes',
                            'No'
                        ],
                        description: 'Choose whether to deploy or not')
                    ]
                script {
                    if(params.confirm) {
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