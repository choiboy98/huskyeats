import React, { useState, useEffect, useRef } from 'react';
import { Link } from 'gatsby';
import { useTransition, animated } from 'react-spring';
import { useStaticQuery, graphql } from 'gatsby';
import { GatsbyImage } from "gatsby-plugin-image"

export const verticalImage = graphql`
    fragment verticalImage on File {
        childImageSharp {
            gatsbyImageData(layout: FIXED, width: 450, height: 600)
        }
    }
`

const JournalBanner = () => {
    const data = useStaticQuery(graphql`
    query {
        lunaTest: file(relativePath: { eq: "luna-test.jpg" }) {
            ...verticalImage
        }

        instagram: file(relativePath: { eq: "bw-instagram-logo.png" }) {
            ...squareLogoImage
        }

        tiktok: file(relativePath: { eq: "bw-tiktok-logo.png" }) {
            ...squareLogoImage
        }
    }
`)

    return (
        <div className="container">
            <div className="journal-banner">
                <h1 className="vertical-writing">Journals</h1>
                <div className="featured-journal">
                    <GatsbyImage image={data.lunaTest.childImageSharp.gatsbyImageData} alt="luna test" />
                    <div className="journal-words">
                        <h2>How I became Luna "Choi"</h2>
                        <h3>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</h3>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default JournalBanner