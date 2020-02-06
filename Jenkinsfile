pipeline {
  
  agent {
    docker {
      image 'node'
    }
  }
  stages {
    stage('Clone Sources') {
      steps {
        git 'https://github.com/LiamMcIvor/Vue-sample.git'
      }
    }
    stage('Information') {
      steps {
        sh 'node -v'
        sh 'npm -v'
      }
    }
    /*stage('Config') {
      steps {
        sh 'npm set registry https://registry.npm.taobao.org'
        sh 'npm set disturl https://npm.taobao.org/dist'
        sh 'npm set chromedriver_cdnurl http://cdn.npm.taobao.org/dist/chromedriver'
        sh 'npm set operadriver_cdnurl http://cdn.npm.taobao.org/dist/operadriver'
        sh 'npm set phantomjs_cdnurl http://cdn.npm.taobao.org/dist/phantomjs'
        sh 'npm set fse_binary_host_mirror https://npm.taobao.org/mirrors/fsevents'
        sh 'npm set sass_binary_site http://cdn.npm.taobao.org/dist/node-sass'
        sh 'npm set electron_mirror http://cdn.npm.taobao.org/dist/electron/'
      }
    }*/
    stage('Dependencies') {
      steps {
        sh 'npm install'
      }
    }
    stage('Build') {
      steps {
        sh 'npm run build'
      }
    }
    stage('Artifacts') {
      steps {
        sh 'tar -czf dist.tar.gz ./dist'
        stash 'dist.tar.gz'
        stash 'Dockerfile'
        stash 'nginx/nginx.conf'
        archiveArtifacts artifacts: 'dist.tar.gz', fingerprint: true
      }
    }
    stage('Docker Image') {
      agent {
        docker {
          image 'docker:dind'
        }
      }
      steps {
        sh 'docker -v'
        unstash 'dist.tar.gz'
        unstash 'Dockerfile'
        unstash '/nginx/nginx.conf'sh "docker build -t liammcivor/vehicle-front-end:$BUILD_NUMBER -t liammcivor/vehicle-front-end:latest ."
        	}
        }
        stage('--dockerhub-push--') {
        	steps {
        		withDockerRegistry([ credentialsId: "dockerhub-Liam", url: "" ]) {
        			sh "docker push liammcivor/vehicle-front-end:$BUILD_NUMBER"
        			sh "docker push liammcivor/vehicle-front-end:latest"
        		}
        	}
        }
        stage('--test-deploy--') {
            steps {
            	sh "ssh -T -i /home/jenkins/key.pem ubuntu@ec2-18-130-253-83.eu-west-2.compute.amazonaws.com ./vehicle-front-end.sh"
            }
        }
        stage('--live-deploy--') {
        	steps {
        		sh "ssh -T -i /home/jenkins/key.pem ubuntu@ec2-52-56-172-54.eu-west-2.compute.amazonaws.com ./vehicle-front-end.sh"
        	}
        }
    
  }
}

/*pipeline {
    agent any
    stages {
        stage('--docker-build--') {
        	steps {
        		sh "docker build -t liammcivor/vehicle-front-end:$BUILD_NUMBER -t liammcivor/vehicle-front-end:latest ."
        	}
        }
        stage('--dockerhub-push--') {
        	steps {
        		withDockerRegistry([ credentialsId: "dockerhub-Liam", url: "" ]) {
        			sh "docker push liammcivor/vehicle-front-end:$BUILD_NUMBER"
        			sh "docker push liammcivor/vehicle-front-end:latest"
        		}
        	}
        }
        stage('--test-deploy--') {
            steps {
            	sh "ssh -T -i /home/jenkins/key.pem ubuntu@ec2-18-130-253-83.eu-west-2.compute.amazonaws.com ./vehicle-front-end.sh"
            }
        }
        stage('--live-deploy--') {
        	steps {
        		sh "ssh -T -i /home/jenkins/key.pem ubuntu@ec2-52-56-172-54.eu-west-2.compute.amazonaws.com ./vehicle-front-end.sh"
        	}
        }
    }
}*/
