pipeline {
  agent {
    docker {
      image 'node'
      args '-u root:sudo'
    }

  }
  stages {
    stage('Prepare') {
      steps {
        git url: "https://github.com/khiemips/ReactApp.git", branch: "${env.BRANCH_NAME}", credentialsId: "khiemipsgithub"
        sh 'npm i'

        script {
          if (env.BRANCH_NAME.equals('master')){
            GIT_BRANCH = "master"
            AKS_NAMESPACE = "test"
          } else if (env.BRANCH_NAME.equals('develop')) {
            GIT_BRANCH = "integration"
            AKS_NAMESPACE = "integration"
          }
          APP_TAG = "${APP_NAME}-${GIT_BRANCH}".toLowerCase().replaceAll("/", "-")
          ACR_IMAGE_URL = "${ACR_LOGINSERVER}/${APP_TAG}:${BUILD_NUMBER}"
        }

        echo "${GIT_BRANCH} - ${AKS_NAMESPACE}"
      }
    }
    stage('Build') {
      when {
        expression { env.BRANCH_NAME == 'master' || env.BRANCH_NAME == 'develop' }
      }
      steps {   
        sh 'npm build'
        echo "${GIT_BRANCH} - ${AKS_NAMESPACE}"
      }
    }
    stage('Test') {
      when {
        expression { env.BRANCH_NAME == 'master' || env.BRANCH_NAME == 'develop' }
      }
      steps {
        echo 'Testing...'
        echo "${GIT_BRANCH} - ${AKS_NAMESPACE}"
      }
    }
  }
  post {
    always {
        node('master'){
            mail to: 'Khiem.NguyenTan@ips-ag.com',
             subject: """[uFabBuild] ${currentBuild.currentResult}: ${currentBuild.fullDisplayName}""",
             body: """
Hi team, 
             
The build '${currentBuild.fullDisplayName}' is ${currentBuild.currentResult}.
Please visit ${env.BUILD_URL} for details.
             
Regards,
uFab CI/CD"""
        }
    }
  }
  environment {
    GIT_BRANCH = "develop"
    AKS_NAMESPACE = "${GIT_BRANCH}"
    APP_TAG = "tag"
    ACR_IMAGE_URL = "url"
    APP_NAME = "ReactApp"
    ACR_LOGINSERVER = "hub.docker.com"
    }
}