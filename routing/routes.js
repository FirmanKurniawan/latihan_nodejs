module.exports = (app) => {
    const UserController = require('../controller/UserController')

    app.route('/v2/user').get(UserController.v2showUsers)
    app.route('/v2/user/:id').get(UserController.v2usersId)
    app.route('/v2/user').post(UserController.v2usersAdd)
    app.route('/v2/user/:id').put(UserController.v2usersEdit)
    app.route('/v2/user/:id').delete(UserController.v2usersDelete)
}