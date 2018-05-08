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
      parallel {
        stage('Test') {
          steps {
            sh 'echo \'testing\''
          }
        }
        stage('Integration test') {
          steps {
            sh 'echo(\'integration test\')'
          }
        }
      }
    }
    stage('Notify') {
      steps {
        mail(subject: 'Build notification', body: 'Notification body', to: 'Khiem.NguyenTan@ips-ag.com')
      }
    }
  }
}