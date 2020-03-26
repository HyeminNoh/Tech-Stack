const path = require('path');
const utils = require('./utils');

class SidebarGen {
  constructor () {
    
  };

  getSidebarItem (targetdir) {
    let workingdir = './docs';
    let files = utils.getFiles(workingdir, targetdir);
    
    return utils.getFilepaths(files, targetdir).map((path) => {
      return "[" + path + " ]";
    }).join();
  };

  getSidebarGroup (targetdir = '/', title = '', isCollapsable = true) {
    let workingdir = './docs';
    let files = utils.getFiles(workingdir, targetdir);
    let grouptitle = utils.toTitle(title, targetdir);

    let directoryGroup =  {
      title: grouptitle,
      collapsable: isCollapsable,
      children: utils.getFilepaths(files, targetdir)
    };
    return directoryGroup;
  };

  getSidebarList (isCollapsable = true) {
    let root = ['']
    let workingdir = './docs';
    let rootfiles = utils.getRootFileItems(workingdir);
    let rootItems = rootfiles.map((file) => {
      return path.join(file);
    });
    let directores = utils.getDirectores(workingdir);
    let directoryGroups = directores.map((directory) => {
      return {
        title: directory,
        collapsable: isCollapsable,
        children: utils.getFileitems(workingdir, directory)
      };
    });
    let sidebarList = root.concat(rootItems, directoryGroups);
  
    return sidebarList;
  };
}
module.exports = new SidebarGen();
