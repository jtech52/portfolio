import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';

const variants = {
  primary: 'btn btn--primary',
  outline: 'btn btn--outline',
  ghost: 'btn btn--ghost',
  icon: 'btn btn--icon',
};

const Button = ({
  children,
  variant = 'primary',
  to,
  href,
  onClick,
  disabled,
  className = '',
  ...props
}) => {
  const classes = `${variants[variant] || variants.primary} ${className}`.trim();

  const motionProps = {
    whileHover: { y: -2 },
    whileTap: { scale: 0.97 },
    transition: { duration: 0.2 },
  };

  if (to) {
    return (
      <motion.div {...motionProps} style={{ display: 'inline-block' }}>
        <Link to={to} className={classes} {...props}>
          {children}
        </Link>
      </motion.div>
    );
  }

  if (href) {
    return (
      <motion.div {...motionProps} style={{ display: 'inline-block' }}>
        <a href={href} className={classes} target="_blank" rel="noreferrer" {...props}>
          {children}
        </a>
      </motion.div>
    );
  }

  return (
    <motion.button
      className={classes}
      onClick={onClick}
      disabled={disabled}
      {...motionProps}
      {...props}
    >
      {children}
    </motion.button>
  );
};

export default Button;
