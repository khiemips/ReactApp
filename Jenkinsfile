pipeline {
  agent {
    docker {
      image 'node'
      args '-u root:sudo'
    }
  }
  stages {
    stage('Build') {
      steps {
        sh 'npm i'
        sh 'npm run build'
      }
    }
    stage('Test') {
      steps {
        echo 'npm run test here...'
      }
    }
  }
  post {
    always {
      node('master'){
        // Put your email below for notification of failed builds
        mail to: 'Khiem.NguyenTan@ips-ag.com',
        subject: """[uFabBuild][FrontEnd CI] ${currentBuild.currentResult}: ${currentBuild.fullDisplayName}""",
        body: """
Hi team,

The build '${currentBuild.fullDisplayName}' is ${currentBuild.currentResult}.
Frontend: ReactApp - Branch: ${env.BRANCH_NAME}

Please visit ${env.BUILD_URL} for details.

Regards,
Jenkins"""
        }
    }
  }
}
