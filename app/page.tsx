"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import confetti from "canvas-confetti";

const dateIdeas = [
  "Picnic in the park",
  "Movie marathon night",
  "Cooking class together",
  "Stargazing adventure",
  "Board game competition",
  "DIY craft project",
  "Local museum tour",
  "Karaoke night",
  "Couples spa day",
  "Scenic bike ride",
  "Volunteer together",
  "Escape room challenge",
  "Wine tasting experience",
  "Pottery painting date",
  "Outdoor concert or music festival",
  "Couples dance class",
  "Botanical garden stroll",
  "Sunset beach walk",
  "Indoor rock climbing",
  "Couples' cooking competition",
  "Visit a local farmer's market",
  "Attend a comedy show",
  "Take a hot air balloon ride",
  "Go on a photo scavenger hunt",
  "Try a new restaurant",
  "Take a couples' yoga class",
  "Visit an amusement park",
  "Go bowling",
  "Take a scenic train ride",
  "Visit a local winery or brewery",
  "Go horseback riding",
  "Take a pottery class",
  "Visit an aquarium",
  "Go ice skating",
  "Take a scenic drive",
  "Have a picnic in your living room",
  "Go to a drive-in movie",
  "Take a couples' massage class",
  "Go to a paint and sip event",
  "Visit a local art gallery",
  "Take a ghost tour",
  "Go to a trivia night at a local bar",
  "Take a mixology class",
  "Go to a themed restaurant",
  "Take a scenic hike",
  "Go to a local sports game",
  "Take a couples' photography class",
  "Go mini-golfing",
  "Take a food tour",
  "Go to a murder mystery dinner",
  "Take a couples' archery class",
  "Go to a local festival",
  "Take a scenic boat ride",
  "Go to a trampoline park",
  "Take a couples' self-defense class",
  "Go to a silent disco",
  "Take a couples' painting class",
  "Go to a planetarium",
  "Take a couples' pottery class",
  "Go to a local flea market",
  "Take a couples' improv class",
  "Go to a rooftop bar",
  "Take a couples' cooking class",
  "Go to a drive-through safari",
  "Take a couples' dance lesson",
  "Go to a local food truck festival",
  "Take a couples' wine and cheese pairing class",
  "Go to a local carnival",
  "Take a couples' gardening class",
  "Go to a butterfly conservatory",
  "Take a couples' chocolate making class",
  "Go to a local concert",
  "Take a couples' pottery painting class",
  "Go to a local theater production",
  "Take a couples' sushi making class",
  "Go to a local zoo",
  "Take a couples' mixology class",
  "Go to a local botanical garden",
  "Take a couples' photography walk",
  "Go to a local farmers market",
  "Take a couples' cooking competition class",
  "Go to a local art fair",
  "Take a couples' dance competition class",
  "Go to a local food festival",
  "Take a couples' wine blending class",
  "Go to a local craft fair",
  "Take a couples' beer brewing class",
  "Go to a local music festival",
  "Take a couples' pasta making class",
  "Go to a local film festival",
  "Take a couples' cocktail making class",
  "Go to a local book fair",
  "Take a couples' bread making class",
  "Go to a local antique show",
  "Take a couples' cake decorating class",
  "Go to a local comedy club",
  "Take a couples' pottery throwing class",
  "Go to a local jazz club",
  "Take a couples' glass blowing class",
  "Go to a local poetry reading",
  "Take a couples' candle making class",
  "Go to a local open mic night",
  "Take a couples' soap making class",
  "Go to a local art walk",
  "Take a couples' jewelry making class",
  "Go to a local wine tasting event",
  "Take a couples' terrarium making class",
  "Go to a local beer festival",
  "Take a couples' perfume making class",
  "Go to a local food and wine pairing event",
  "Take a couples' leather crafting class",
  "Go to a local cheese tasting event",
  "Take a couples' woodworking class",
  "Go to a local chocolate tasting event",
  "Take a couples' knitting class",
  "Go to a local tea tasting event",
  "Take a couples' calligraphy class",
  "Go to a local coffee cupping event",
  "Take a couples' flower arranging class",
  "Go to a local olive oil tasting event",
  "Take a couples' pottery wheel class",
  "Go to a local honey tasting event",
  "Take a couples' glass painting class",
  "Go to a local spice tasting event",
  "Take a couples' mosaic making class",
  "Go to a local truffle tasting event",
  "Take a couples' origami class",
  "Go to a local sake tasting event",
  "Take a couples' weaving class",
  "Go to a local gin tasting event",
  "Take a couples' bookbinding class",
  "Go to a local whiskey tasting event",
  "Take a couples' embroidery class",
  "Go to a local rum tasting event",
  "Take a couples' macramé class",
  "Go to a local vodka tasting event",
  "Take a couples' paper making class",
  "Go to a local tequila tasting event",
  "Take a couples' stained glass class",
  "Go to a local mezcal tasting event",
  "Take a couples' pottery glazing class",
  "Go to a local cognac tasting event",
  "Take a couples' wire wrapping class",
  "Go to a local brandy tasting event",
  "Take a couples' glass etching class",
  "Go to a local port wine tasting event",
  "Take a couples' wood burning class",
  "Go to a local champagne tasting event",
  "Take a couples' needle felting class",
  "Go to a local cider tasting event",
  "Take a couples' resin art class",
  "Go to a local absinthe tasting event",
  "Take a couples' screen printing class",
  "Go to a local amaro tasting event",
  "Take a couples' block printing class",
  "Go to a local vermouth tasting event",
  "Take a couples' lino cutting class",
  "Go to a local sherry tasting event",
  "Take a couples' pottery hand building class",
  "Go to a local grappa tasting event",
  "Take a couples' metal stamping class",
  "Go to a local liqueur tasting event",
  "Take a couples' leather tooling class",
  "Go to a local fortified wine tasting event",
  "Take a couples' glass fusing class",
  "Go to a local eau de vie tasting event",
  "Take a couples' wood carving class",
  "Go to a local fruit wine tasting event",
  "Take a couples' polymer clay class",
  "Go to a local mead tasting event",
  "Take a couples' stone carving class",
  "Go to a local dessert wine tasting event",
  "Take a couples' glass mosaic class",
  "Go to a local ice wine tasting event",
  "Take a couples' metal embossing class",
  "Go to a local sparkling wine tasting event",
  "Take a couples' enameling class",
  "Go to a local organic wine tasting event",
  "Take a couples' pewter casting class",
  "Go to a local biodynamic wine tasting event",
  "Take a couples' glass bead making class",
  "Go to a local natural wine tasting event",
  "Take a couples' ceramic sculpture class",
  "Go to a local orange wine tasting event",
  "Take a couples' metal clay jewelry class",
  "Go to a local pét-nat wine tasting event",
  "Take a couples' glass lampworking class",
  "Go to a local skin contact wine tasting event",
  "Take a couples' stone setting class",
  "Go to a local amphora wine tasting event",
  "Take a couples' glass blowing paperweight class",
  "Go to a local volcanic wine tasting event",
  "Take a couples' metal forging class",
  "Go to a local high altitude wine tasting event",
  "Take a couples' glass casting class",
  "Go to a local coastal wine tasting event",
  "Take a couples' metal chasing and repoussé class",
  "Go to a local island wine tasting event",
  "Take a couples' glass slumping class",
  "Go to a local mountain wine tasting event",
];

export default function DateNightGenerator() {
  const [dateIdea, setDateIdea] = useState("");

  const generateDateIdea = () => {
    const randomIdea = dateIdeas[Math.floor(Math.random() * dateIdeas.length)];
    setDateIdea(randomIdea);
    confetti({
      particleCount: 100,
      spread: 70,
      origin: { y: 0.6 },
    });
  };

  return (
    <div className="min-h-screen checkered-background flex flex-col items-center justify-center p-4">
      <div className="w-full max-w-3xl bg-white bg-opacity-90 rounded-2xl shadow-lg p-6 space-y-6">
        <div className="flex items-center space-x-2 mb-4">
          <div className="w-3 h-3 rounded-full bg-red-400"></div>
          <div className="w-3 h-3 rounded-full bg-yellow-400"></div>
          <div className="w-3 h-3 rounded-full bg-green-400"></div>
        </div>
        <h1 className="text-5xl font-bold text-center text-pink-500 font-fredoka">
          Lovebyte
        </h1>
        <p className="text-2xl text-center text-purple-400 font-fredoka">
          A Date Night Generator
        </p>
        <div className="text-center">
          <Button
            onClick={generateDateIdea}
            className="bg-purple-400 hover:bg-purple-500 text-white font-bold py-2 px-4 rounded-full text-lg transition-all duration-200 transform hover:scale-105 font-fredoka"
          >
            Roll for a Date Idea!
          </Button>
        </div>
        {dateIdea && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-center"
          >
            <p className="text-2xl font-semibold text-gray-700 mb-2 font-fredoka">
              Your Date Idea:
            </p>
            <p className="text-3xl font-bold text-purple-600 font-fredoka">
              {dateIdea}
            </p>
          </motion.div>
        )}
        <footer className="text-center mt-8">
          <p className="text-sm text-gray-600">
            Created by{" "}
            <a
              href="https://github.com/fireflightg"
              className="text-purple-500 hover:underline"
            >
              Saahib Mohammed
            </a>
          </p>
          <p className="text-sm text-gray-600">
            <a
              href="https://github.com/fireflightg/loverbyte/tree/main"
              className="text-purple-500 hover:underline"
            >
              GitHub
            </a>{" "}
            |{" "}
            <a
              href="https://www.saahibmohammed.com/"
              className="text-purple-500 hover:underline"
            >
              Portfolio
            </a>
          </p>
        </footer>
      </div>
    </div>
  );
}
