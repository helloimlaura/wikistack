const Sequelize = require('sequelize');
const db = new Sequelize('postgres://localhost:5432/wikistack', {logging: false});

const Page = db.define('pages', {
  title: {
    type: Sequelize.STRING,
    allowNull: false
  },
  slug: {
    type: Sequelize.STRING,
    allowNull: true
    //isUrl: true
  },
  content:  {
    type: Sequelize.TEXT,
    allowNull: false
  },
  status: {
    type: Sequelize.ENUM('open', 'closed')
  }
});

const User = db.define('users', {
  name: {
    type: Sequelize.STRING,
    allowNull: false
  },
  email: {
    type: Sequelize.STRING,
    allowNull: false
  }
});

Page.beforeCreate((page) => {
  // Removes all non-alphanumeric characters from title
  // And make whitespace underscore
  page.slug = page.title.replace(/\s+/g, '_').replace(/\W/g, '');
});

Page.belongsTo(User, { as: 'author' });

module.exports = { db, Page, User};
