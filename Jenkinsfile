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
        sh 'npm i'
      }
    }
    stage('Build') {
      steps {
        sh 'npm build'
      }
    }
    stage('Test') {
      steps {
        echo 'Testing...'
      }
    }
    stage('Notify') {
      steps {
        mail to: 'Khiem.NguyenTan@ips-ag.com',
             subject: """[uFab-CI-manual] ${currentBuild.currentResult}: ${currentBuild.fullDisplayName}""",
             body: """
Hi team, 
             
The CI pipeline '${currentBuild.fullDisplayName}' is ${currentBuild.currentResult}.

Please visit ${env.BUILD_URL} for details.
             
Regards,
uFab CI/CD"""
      }
    }
  }
}