export const firebaseAssets = "https://firebasestorage.googleapis.com/v0/b/adhupraba.appspot.com/o";

export const getAssetUrl = (type: string, subType: string, fileName: string) => {
  return `${firebaseAssets}/${type}%2F${subType}%2F${encodeURI(fileName)}?alt=media`;
};

export const urls = {
  assets: {
    documents: {
      pdf: {
        resume: getAssetUrl("documents", "pdf", "Adharsh_SP_Resume.pdf"),
      },
    },
    images: {
      jpeg: {
        adharsh: getAssetUrl("images", "jpeg", "adharsh.jpg"),
        adharsh1: getAssetUrl("images", "jpeg", "adharsh-1.jpg"),
        code: getAssetUrl("images", "jpeg", "code.jpg"),
      },
      png: {
        betterEd: getAssetUrl("images", "png", "better-ed.png"),
        ciniscape: getAssetUrl("images", "png", "ciniscape.png"),
        codingmart: getAssetUrl("images", "png", "codingmart.png"),
        kalanju: getAssetUrl("images", "png", "kalanju.png"),
        pixical: getAssetUrl("images", "png", "pixical.png"),
        pixicook: getAssetUrl("images", "png", "pixicook.png"),
      },
      svg: {
        postgresql: getAssetUrl("images", "svg", "postgresql.svg"),
        mysql: getAssetUrl("images", "svg", "mysql.svg"),
        mongodb: getAssetUrl("images", "svg", "mongodb.svg"),
        reactjs: getAssetUrl("images", "svg", "react.svg"),
        nextjs: getAssetUrl("images", "svg", "nextjs.svg"),
        typescript: getAssetUrl("images", "svg", "typescript.svg"),
        nodejs: getAssetUrl("images", "svg", "nodejs.svg"),
        expressjs: getAssetUrl("images", "svg", "express.svg"),
        graphql: getAssetUrl("images", "svg", "graphql.svg"),
        bootstrap: getAssetUrl("images", "svg", "bootstrap.svg"),
        cicd: getAssetUrl("images", "svg", "cicd.svg"),
        travisci: getAssetUrl("images", "svg", "travisci.svg"),
        docker: getAssetUrl("images", "svg", "docker.svg"),
        kubernetes: getAssetUrl("images", "svg", "kubernetes.svg"),
        ebs: getAssetUrl("images", "svg", "elasticbeanstalk.svg"),
        fastifyjs: getAssetUrl("images", "svg", "fastify.svg"),
        prisma: getAssetUrl("images", "svg", "prisma.svg"),
        heroku: getAssetUrl("images", "svg", "heroku.svg"),
        turborepo: getAssetUrl("images", "svg", "turborepo.svg"),
        go: getAssetUrl("images", "svg", "go.svg"),
        aws: getAssetUrl("images", "svg", "aws.svg"),
        microservice: getAssetUrl("images", "svg", "microservice.svg"),
        open: getAssetUrl("images", "svg", "open.svg"),
        linkedin: getAssetUrl("images", "svg", "linkedin.svg"),
        github: getAssetUrl("images", "svg", "github.svg"),
      },
    },
  },
};
