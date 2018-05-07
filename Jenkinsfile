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
        sh 'npm run build'
      }
    }
    stage('Test') {
      steps {
        sh 'npm test'
      }
    }
  }
}