const fs = require('fs');
const path = require('path');

class SidebarUtils {

  toTitle(title, targetpath) {
    if (title === '') {
      return targetpath.replace('/', '');
    }
    return title;
  };

  getFilepaths(files, targetdir) {
    return files.map((file) => {

      if (file === 'README.md') {
        return path.join(targetdir);
      }
      return path.join(targetdir, file);
    });
  };

  getFiles (workingdir, targetpath) {
    return fs.readdirSync(path.join(workingdir, targetpath)).filter((file) => {
      return this.isFile(path.join(workingdir, targetpath, file));
    });
  };

  getFileitems(workingdir, targetdir) {
    return fs.readdirSync(path.join(workingdir, targetdir)).map((file) => {
      if (file === 'README.md') {
        return path.join(targetdir);
      } 
      return path.join(targetdir, file);
    })
  };

  getDirectores (workingdir) {
    return fs.readdirSync(workingdir).filter((childdir) => {
      if (childdir === '.vuepress') {
        return false;
      }
      return this.isDirectory(path.join(workingdir, childdir));
    });
  };

  getRootFileItems (workingdir) {
    return fs.readdirSync(workingdir).filter((file) => {
      if (file === 'README.md') {
        return false;
      }
      return this.isFile(path.join(workingdir, file));
    });
  };

  isFile(targetpath) {
    return fs.existsSync(targetpath) && fs.statSync(targetpath).isFile() && path.extname(targetpath) === '.md';
  };

  isDirectory(targetpath) {
    return fs.existsSync(targetpath) && fs.statSync(targetpath).isDirectory();
  };
}
module.exports = new SidebarUtils();