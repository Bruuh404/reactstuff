import * as React from 'react';
import { useState } from "react";
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid2';
import "./home.css"
import Item from "../components/Item"

const Home = () => {
    const [isExpanded, setIsExpanded] = useState(false);

    const handleToggle = () => {
      setIsExpanded(!isExpanded);
    };
    return (
        <Box sx={{m: 2, flexGrow: 1 }}>
            <Grid id="container" container spacing={2}>
                <Grid size={
                    {xs: 12, md: 6}
                    }>
                    <Grid id="grid1" container spacing={2}>
                        <Grid item size={{xs: 12, md: 6}}>
                            <Item>
                        <h1>Information Box</h1>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed non risus. Suspendisse lectus tortor, dignissim sit amet, adipiscing nec, ultricies sed, dolor. 
                                Morbi vel arcu. Vestibulum rutrum rutrum neque. Aenean auctor gravida sem. 
                                Praesent et diam eget libero egestas mattis. Sed convallis augue vitae lorem.
                                Nullam euismod convallis est. Quisque aliquam. Donec faucibus. Nunc iaculis suscipit dui. Nam sit amet sem. 
                                Aliquam libero nisi, imperdiet at, tincidunt nec, gravida vehicula, nisl. Praesent mattis, massa quis luctus fermentum, turpis mi volutpat justo, eu volutpat enim diam eget metus. 
                                Maecenas ornare tortor. Donec sed tellus eget sapien fringilla nonummy. Mauris a ante. Suspendisse quam sem, consequat at, commodo vitae, feugiat in, nunc. Morbi imperdiet augue quis tellus. 
                                Etiam feugiat lorem non metus. Vestibulum dapibus nunc ac augue.
                            </p>
                            </Item>
                        </Grid>
                        <Grid item size={{xs: 12, md: 6}}>
                        <Item>
                        <h1>Information Box</h1>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed non risus. Suspendisse lectus tortor, dignissim sit amet, adipiscing nec, ultricies sed, dolor. 
                                Morbi vel arcu. Vestibulum rutrum rutrum neque. Aenean auctor gravida sem. 
                                Praesent et diam eget libero egestas mattis. Sed convallis augue vitae lorem.
                                Nullam euismod convallis est. Quisque aliquam. Donec faucibus. Nunc iaculis suscipit dui. Nam sit amet sem. 
                                Aliquam libero nisi, imperdiet at, tincidunt nec, gravida vehicula, nisl. Praesent mattis, massa quis luctus fermentum, turpis mi volutpat justo, eu volutpat enim diam eget metus. 
                                Maecenas ornare tortor. Donec sed tellus eget sapien fringilla nonummy. Mauris a ante. Suspendisse quam sem, consequat at, commodo vitae, feugiat in, nunc. Morbi imperdiet augue quis tellus. 
                                Etiam feugiat lorem non metus. Vestibulum dapibus nunc ac augue.
                            </p>
                            </Item>
                            </Grid>
                            <Grid item size={12}>
                        <Item>
                        <h1>Information Box</h1>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed non risus. Suspendisse lectus tortor, dignissim sit amet, adipiscing nec, ultricies sed, dolor. 
                                Morbi vel arcu. Vestibulum rutrum rutrum neque. Aenean auctor gravida sem. 
                                Praesent et diam eget libero egestas mattis. Sed convallis augue vitae lorem.
                                Nullam euismod convallis est. Quisque aliquam. Donec faucibus. Nunc iaculis suscipit dui. Nam sit amet sem. 
                                Aliquam libero nisi, imperdiet at, tincidunt nec, gravida vehicula, nisl. Praesent mattis, massa quis luctus fermentum, turpis mi volutpat justo, eu volutpat enim diam eget metus. 
                                Maecenas ornare tortor. Donec sed tellus eget sapien fringilla nonummy. Mauris a ante. Suspendisse quam sem, consequat at, commodo vitae, feugiat in, nunc. Morbi imperdiet augue quis tellus. 
                                Etiam feugiat lorem non metus. Vestibulum dapibus nunc ac augue.
                            </p>
                            </Item>
                            </Grid>
                    </Grid>
                </Grid>
                <Grid id="maxsize" size={{xs: 12, md: 6}}>
                    <Item>
                        <h1>Information Box</h1>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed non risus. Suspendisse lectus tortor, dignissim sit amet, adipiscing nec, ultricies sed, dolor. 
                                Morbi vel arcu. Vestibulum rutrum rutrum neque. Aenean auctor gravida sem. 
                                Praesent et diam eget libero egestas mattis. Sed convallis augue vitae lorem.
                                Nullam euismod convallis est. Quisque aliquam. Donec faucibus. Nunc iaculis suscipit dui. Nam sit amet sem. 
                                Aliquam libero nisi, imperdiet at, tincidunt nec, gravida vehicula, nisl. Praesent mattis, massa quis luctus fermentum, turpis mi volutpat justo, eu volutpat enim diam eget metus. 
                                Maecenas ornare tortor. Donec sed tellus eget sapien fringilla nonummy. Mauris a ante. Suspendisse quam sem, consequat at, commodo vitae, feugiat in, nunc. Morbi imperdiet augue quis tellus. 
                                Etiam feugiat lorem non metus. Vestibulum dapibus nunc ac augue.
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed non risus. Suspendisse lectus tortor, dignissim sit amet, adipiscing nec, ultricies sed, dolor. 
                                Morbi vel arcu. Vestibulum rutrum rutrum neque. Aenean auctor gravida sem. 
                                Praesent et diam eget libero egestas mattis. Sed convallis augue vitae lorem.
                                Nullam euismod convallis est. Quisque aliquam. Donec faucibus. Nunc iaculis suscipit dui. Nam sit amet sem. 
                                Aliquam libero nisi, imperdiet at, tincidunt nec, gravida vehicula, nisl. Praesent mattis, massa quis luctus fermentum, turpis mi volutpat justo, eu volutpat enim diam eget metus. 
                                Maecenas ornare tortor. Donec sed tellus eget sapien fringilla nonummy. Mauris a ante. Suspendisse quam sem, consequat at, commodo vitae, feugiat in, nunc. Morbi imperdiet augue quis tellus. 
                                Etiam feugiat lorem non metus. Vestibulum dapibus nunc ac augue.
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed non risus. Suspendisse lectus tortor, dignissim sit amet, adipiscing nec, ultricies sed, dolor. 
                                Morbi vel arcu. Vestibulum rutrum rutrum neque. Aenean auctor gravida sem. 
                                Praesent et diam eget libero egestas mattis. Sed convallis augue vitae lorem.
                                Nullam euismod convallis est. Quisque aliquam. Donec faucibus. Nunc iaculis suscipit dui. Nam sit amet sem. 
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed non risus. Suspendisse lectus tortor, dignissim sit amet, adipiscing nec, ultricies sed, dolor. 
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed non risus. Suspendisse lectus tortor, dignissim sit amet, adipiscing nec, ultricies sed, dolor. 
                                {isExpanded && (
                                    <span>
                                        Aliquam libero nisi, imperdiet at, tincidunt nec, gravida vehicula, nisl. Praesent mattis, massa quis luctus fermentum, turpis mi volutpat justo, eu volutpat enim diam eget metus. 
                                Maecenas ornare tortor. Donec sed tellus eget sapien fringilla nonummy. Mauris a ante. Suspendisse quam sem, consequat at, commodo vitae, feugiat in, nunc. Morbi imperdiet augue quis tellus. 
                                Etiam feugiat lorem non metus. Vestibulum dapibus nunc ac augue.
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed non risus. Suspendisse lectus tortor, dignissim sit amet, adipiscing nec, ultricies sed, dolor. 
                                Morbi vel arcu. Vestibulum rutrum rutrum neque. Aenean auctor gravida sem. 
                                Praesent et diam eget libero egestas mattis. Sed convallis augue vitae lorem.
                                Nullam euismod convallis est. Quisque aliquam. Donec faucibus. Nunc iaculis suscipit dui. Nam sit amet sem. 
                                Aliquam libero nisi, imperdiet at, tincidunt nec, gravida vehicula, nisl. Praesent mattis, massa quis luctus fermentum, turpis mi volutpat justo, eu volutpat enim diam eget metus. 
                                Maecenas ornare tortor. Donec sed tellus eget sapien fringilla nonummy. Mauris a ante. Suspendisse quam sem, consequat at, commodo vitae, feugiat in, nunc. Morbi imperdiet augue quis tellus. 
                                Etiam feugiat lorem non metus. Vestibulum dapibus nunc ac augue.
                                    </span>
                                    )}
                        </p>
                            <button onClick={handleToggle} id="myBtn">
                            {isExpanded ? "Read less" : "Read more"}
                          </button>
                    </Item>
                </Grid>
                </Grid>
                <Grid>
                    <Item>
                        <h1>Information Box</h1>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed non risus. Suspendisse lectus tortor, dignissim sit amet, adipiscing nec, ultricies sed, dolor. 
                                Morbi vel arcu. Vestibulum rutrum rutrum neque. Aenean auctor gravida sem. 
                                Praesent et diam eget libero egestas mattis. Sed convallis augue vitae lorem.
                                Nullam euismod convallis est. Quisque aliquam. Donec faucibus. Nunc iaculis suscipit dui. Nam sit amet sem.
                                Aliquam libero nisi, imperdiet at, tincidunt nec, gravida vehicula, nisl. Praesent mattis, massa quis luctus fermentum, turpis mi volutpat justo, eu volutpat enim diam eget metus. 
                                Maecenas ornare tortor. Donec sed tellus eget sapien fringilla nonummy. Mauris a ante. Suspendisse quam sem, consequat at, commodo vitae, feugiat in, nunc. Morbi imperdiet augue quis tellus. 
                                Etiam feugiat lorem non metus. Vestibulum dapibus nunc ac augue.
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed non risus. Suspendisse lectus tortor, dignissim sit amet, adipiscing nec, ultricies sed, dolor. 
                                Morbi vel arcu. Vestibulum rutrum rutrum neque. Aenean auctor gravida sem. 
                                Praesent et diam eget libero egestas mattis. Sed convallis augue vitae lorem.
                                Nullam euismod convallis est. Quisque aliquam. Donec faucibus. Nunc iaculis suscipit dui. Nam sit amet sem. 
                                </p>
                    </Item>
                </Grid>
        </Box>
    );
}

export default Home;