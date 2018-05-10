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
      }
    }
    stage('Build') {
      when {
        expression { env.BRANCH_NAME == 'master' || env.BRANCH_NAME == 'develop' }
      }
      steps {
        sh 'npm build'
      }
    }
    stage('Test') {
      when {
        expression { env.BRANCH_NAME == 'master' || env.BRANCH_NAME == 'develop' }
      }
      steps {
        echo 'Testing...'
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
}