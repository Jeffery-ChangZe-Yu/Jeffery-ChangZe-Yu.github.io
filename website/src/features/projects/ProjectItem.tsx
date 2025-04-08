import { Button, Card, CardActionArea, CardActions, CardContent, Link, Typography } from '@mui/material';

type Props = {
    title: string,
    links: string[],
    pictureUrl: string,
    description: string
}

export default function ProjectItem({title, links, pictureUrl, description}: Props) {
  const websiteLink = links[0];
  const githubLink = links[1];

    return (
    <Card>
        <CardActionArea href={websiteLink}>
            {/* <CardMedia 
                sx={{height:'10vh'}}
                image={pictureUrl}
                title={title}
            /> Not working right now, disabled */}
            <CardContent>
                <Typography variant='h5'>{title}</Typography>
                <Typography>{description}</Typography>
            </CardContent>
        </CardActionArea>
        <CardActions>
            <Button component={Link} href={websiteLink}>
                Website
            </Button>
            <Button component={Link} href={githubLink}>
                Github
            </Button>
        </CardActions>
    </Card>
  )
}

