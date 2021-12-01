import React from 'react';
import { Link, useStaticQuery, graphql } from 'gatsby';
import { GatsbyImage } from "gatsby-plugin-image"

export const horizontalLogoImage = graphql`
    fragment horizontalLogoImage on File {
        childImageSharp {
            gatsbyImageData(layout: FIXED, width: 63, height: 45)
        }
    }
`

export const squareLogoImage = graphql`
    fragment squareLogoImage on File {
        childImageSharp {
            gatsbyImageData(layout: FIXED, width: 50, height: 50)
        }
    }
`

const SocialBanner = () => {
    const data = useStaticQuery(graphql`
        query {
            youtube: file(relativePath: { eq: "bw-youtube-logo.png" }) {
                ...horizontalLogoImage
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
            <div className="social-banner">
                <a href="https://www.youtube.com/channel/UC5mAPJhm56f55ZDkz2C2EjA" target="_blank">
                    <GatsbyImage image={data.youtube.childImageSharp.gatsbyImageData} alt="youtube" />
                </a>
                <a href="https://www.instagram.com/huskyeatss/" target="_blank">
                    <GatsbyImage image={data.instagram.childImageSharp.gatsbyImageData} alt="instagram" />
                </a>
                <a href="https://www.tiktok.com/@huskyeatss" target="_blank">
                    <GatsbyImage image={data.tiktok.childImageSharp.gatsbyImageData} alt="tiktok" />
                </a>
            </div>
        </div>
    )
}

export default SocialBanner