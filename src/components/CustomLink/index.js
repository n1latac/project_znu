import { Link, useMatch } from 'react-router-dom';

function CustomLink({children, to, colorText, ...props}) {
    const match = useMatch({
      path: to,
      end: to.length === 1,
    })
  return (
    <Link to={to} {...props} style={{
        color: match ? 'blue' : colorText,
        listStyle: 'none',
        textDecoration: match ? 'underline' : 'none',
    }}>
        {children}
    </Link>
  )
}

export default CustomLink;
