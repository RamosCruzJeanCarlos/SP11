'use strict';

module.exports = function(User){
  User.afterRemote('login', (ctx, user, next) =>{
    let RoleMapping = User.app.models.roleMapping;
    RoleMapping.findOne({
      where:{
        principalId: user.userId
      },
      include: {
        relation: 'role'
      }
    }).then(map =>{
      let role = map.role();
      user.role = role.name;
      next(null, user);
    }).catch(next);
  });
}
