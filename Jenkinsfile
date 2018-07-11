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
    failure {
      node('master'){
        mail to: 'Khiem.NguyenTan@ips-ag.com',
        subject: """[uFabBuild][FE CI] ${currentBuild.currentResult}: ${currentBuild.fullDisplayName}""",
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
