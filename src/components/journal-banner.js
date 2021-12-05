import React, { useState, useEffect, useRef } from 'react';
import { Link } from 'gatsby';
import { useTransition, animated } from 'react-spring';
import { useStaticQuery, graphql } from 'gatsby';
import { GatsbyImage } from "gatsby-plugin-image"

import journals from '../journals/index'

var MAX_JOURNALS = 4;

const JournalBanner = () => {
    const data = useStaticQuery(graphql`
    query {
        yuzuThumbnail: file(relativePath: { eq: "yuzu-drink.JPG" }) {
            childImageSharp {
                gatsbyImageData(layout: FIXED, width: 600, height: 400)
            }
        }
    }
    `)

    return (
        <div className="container">
            <div className="journal-banner">
                <h1 className="vertical-writing">Journals</h1>
                <div class="grid-container">
                {journals.map((journal, index) => {
                    if (index < MAX_JOURNALS) {
                        return (
                            <div class="card">
                                <GatsbyImage image={data.yuzuThumbnail.childImageSharp.gatsbyImageData} alt="image" />
                                <h1>{journal.name}</h1>
                            </div>
                        )
                    }
                    })}
                </div>
                <h1 className="vertical-writing"></h1>
            </div>
        </div>
    )
}

export default JournalBanner;