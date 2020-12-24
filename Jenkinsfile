pipeline  { 

  stage('Build staging') {
            when() {
                branch 'dev'
            }
            environment {
                REVEAL_API_URL_PREFIX="https://beta.butterapis.com/v5/"
            }
            steps {
                container('node') {
                    sh 'npm install'
                    sh 'rm -rf dist'
                    sh 'npm run build:dev'
                    sh 'cd dist'
                    sh 'tar -zcvf dist.tar.gz'
                }
            }
        }

}