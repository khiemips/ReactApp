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
        echo 'Notifying...'
      }
    }
  }
}