
// importer le framework Express.js
// import express from "express";
const express = require("express");

const url = require('url');

const fs = require('fs'); // le module fs permet de manipuler des fichiers

//crée l'application express.js dans la variable app
const app = express();

//L'endroit ou se siteunt les vues qui s'affichent sur le navigateur
app.set("views","./views");

//Préciser le moteur de lecteur de vue a savoir ejs
app.set("view engine", "ejs");

app.use(express.static("public"));//

app.get("/", (req, res) => { // ("/") veut dire que la route est par défaut
    res.writeHead(200, {
        'Content-type' : 'text/html;charset=UTF-8'
    });
    res.write("<b>Hello</b> Bienvenu");
    res.end();
});

 
 
app.get("/accueil", (req, res) => {
   //Récupére l'heure actuelle
    let date = new Date();
    let salutation ="Bonjour";//salutation par defaut = Bonjour

     if(date.getHours() > 14) {
        salutation = "Bonsoir";
     } 

    utilisateur ={
        nom:["HMD","Hamidou","Souane","Leiyla"],//mon tableau
        prenom:"Nicia",
        masalutation: salutation
    };
    res.render("accueil",utilisateur);

});

 
app.get("/contact", (req, res) => {
    objetContact={
        nom:["Faiz","Mahamoud","Sarah"],
        prenom:["Prenom"],
        message:["Message"],
        
    }
    res.render("contact",objetContact);
});

 
app.get("/menu", (req, res) => {
    nosMenus={
        Margherita:["Pizza Marghrita","Pasta Carbonara"],
        Gourmet:["Burger gourmet"],
        César:["salad cesar"],
        
    }
    res.render("menu",nosMenus);
    

});


app.get("/equipe", (req, res) => {
    partieEquipe={
        nom:[""]
        
    }
    res.render("equipe",partieEquipe);
    

});


module.exports = app;