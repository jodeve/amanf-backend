'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert('servicems', [
      {
        name: 'OPD Clinics',
        description: "these run from 8.00am till 4.00pm daily, except Sundays and some Public holidays",
        image: "https://res.cloudinary.com/do2pe6bdt/image/upload/v1699268324/fwbnq8n6kys7rcmw57j0.jpg",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: 'Antenatal/Postnatal Clinics',
        description: "run on Mondays, Thursdays, Fridays and Saturdays",
        image: "https://res.cloudinary.com/do2pe6bdt/image/upload/v1699268324/fwbnq8n6kys7rcmw57j0.jpg",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: 'Emergency Unit',
        description: "this runs daily, 24/7 including Sundays and public holidays",
        image: "https://res.cloudinary.com/do2pe6bdt/image/upload/v1699268324/fwbnq8n6kys7rcmw57j0.jpg",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: 'Maternity',
        description: "this runs daily 24/7 including Sundays and public holidays",
        image: "https://res.cloudinary.com/do2pe6bdt/image/upload/v1699268324/fwbnq8n6kys7rcmw57j0.jpg",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: 'Well-Woman (Gynaecology ) Clinics',
        description: "Mondays & Fridays. Services include screening for breast masses and premalignant diseases of the cervix (PAP smear)",
        image: "https://res.cloudinary.com/do2pe6bdt/image/upload/v1699268324/fwbnq8n6kys7rcmw57j0.jpg",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: 'Surgical Clinics',
        description: "Tuesdays and Saturdays",
        image: "https://res.cloudinary.com/do2pe6bdt/image/upload/v1699268324/fwbnq8n6kys7rcmw57j0.jpg",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: 'Child Immunization & Growth Clinics',
        description: "the 4th Thursday of every month",
        image: "https://res.cloudinary.com/do2pe6bdt/image/upload/v1699268324/fwbnq8n6kys7rcmw57j0.jpg",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: 'The Lab',
        description: "this runs daily 24/7, except Sundays",
        image: "https://res.cloudinary.com/do2pe6bdt/image/upload/v1699268324/fwbnq8n6kys7rcmw57j0.jpg",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
    ])
  },

  async down(queryInterface, Sequelize) {
  }
};
