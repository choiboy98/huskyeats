import { useStaticQuery, graphql } from 'gatsby';

const name = "ornament"
const desc = "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.";
const link = "/recipe/ornament"

export const verticalImage = graphql`
    fragment verticalImage on File {
        childImageSharp {
            gatsbyImageData(layout: FIXED, width: 150, height: 300)
        }
    }
`

const useImages = () => {
    const data = useStaticQuery(graphql`
    query {
        yuzuThumbnail: file(relativePath: { eq: "yuzu-drink.JPG" }) {
            ...verticalImage
        }
    }
    `)

}

export default {
    name,
    desc,
    link,
    useImages
};