import React, { useState, useEffect, useRef } from 'react';
import { Link } from 'gatsby';
import { useTransition, animated } from 'react-spring';
import { useStaticQuery, graphql } from 'gatsby';
import { GatsbyImage } from "gatsby-plugin-image"

import recipes from '../recipes/featured-recipes/index';

var counter = 0;

function useInterval(callback, delay) {
    const savedCallback = useRef();
  
    // Remember the latest callback.
    useEffect(() => {
      savedCallback.current = callback;
    }, [callback]);
  
    // Set up the interval.
    useEffect(() => {
      function tick() {
        savedCallback.current();
      }
      if (delay !== null) {
        let id = setInterval(tick, delay);
        return () => clearInterval(id);
      }
    }, [delay]);
  }

const HeroBanner = () => {
    const data = useStaticQuery(graphql`
        query {
            food1: file(relativePath: { eq: "fancy-food.png" }) {
                childImageSharp {
                    gatsbyImageData(layout: FIXED, width: 1250, height: 1250)
                }
            }
            food2: file(relativePath: { eq: "fancy-food-2.png" }) {
                childImageSharp {
                    gatsbyImageData(layout: FIXED, width: 1250, height: 1250)
                }
            }
        }
    `)

    useInterval(() => {
        counter = (counter + 1) % 3;
        updateRecipe(recipes[counter])
    }, 10000)
    
    const [recipe, updateRecipe] = useState(recipes[counter]);
    const imageTransition = useTransition(recipe, {
        from: { x: -100, y: 0, opacity: 0 },
        enter: { x: 0, y: 0, opacity: 1 },
        delay: 300
    });

    const titleTransition = useTransition(recipe, {
        from: { x: 0, y: 100, opacity: 0 },
        enter: { x: 0, y: 0, opacity: 1 },
        delay: 300
    });

    const descTransition = useTransition(recipe, {
        from: { x: 0, y: 100, opacity: 0 },
        enter: { x: 0, y: 0, opacity: 1 },
        delay: 500
    });

    var currImage = null;
    if (counter == 0) {
        currImage = data.food1.childImageSharp.gatsbyImageData
    } else if (counter == 1) {
        currImage = data.food2.childImageSharp.gatsbyImageData
    } else {
        currImage = data.food2.childImageSharp.gatsbyImageData
    }

    return (
        <div className="container">
            <div className="featured-recipe">
                <div className="inner-recipe">
                    {imageTransition((style, recipe) => 
                        recipe ? 
                        <animated.div style={style}> 
                            <GatsbyImage image={currImage} alt="image" />
                        </animated.div>: ''    
                    )}
                    <div className="inner-recipe-words">
                        {titleTransition((style, recipe) => 
                            recipe ? 
                            <animated.div style={style}> 
                                <h1>{recipe.name}</h1>
                            </animated.div>: ''  
                        )}
                        {descTransition((style, recipe) => 
                            recipe ? 
                            <animated.div style={style}> 
                                <h2>{recipe.desc}</h2>
                            </animated.div>: ''  
                        )}
                    </div>
                </div>
            </div>
        </div>
    )
}

export default HeroBanner