import { Button } from '@/components/ui/button';
import React from 'react';
import { Link } from 'react-router-dom';

/* TODO: add this to the page i have the illustration in. probably this one: <a href="https://storyset.com/leisure">Leisure illustrations by Storyset</a> */

export default function Home() {
  return (
    <div className='flex flex-col items-center justify-center min-h-[calc(100vh-16rem)] px-4 py-12 text-center md:px-8 lg:py-24'>
      {/* Hero Section */}
      <section className='max-w-4xl space-y-6 mb-16'>
        <h1 className='text-4xl font-extrabold tracking-tight text-foreground sm:text-5xl md:text-6xl lg:text-7xl'>
          Unlock Deeper Chess Insights
        </h1>
        <p className='text-lg text-muted-foreground md:text-xl'>
          Your ultimate React-based web client for **Stockfish-powered chess analysis**. Experience an intuitive and
          interactive way to understand your games.
        </p>
        <div className='flex flex-col sm:flex-row gap-4 justify-center mt-8'>
          <Button asChild size='lg' className='px-8 py-3 text-lg'>
            <Link to='/analyze'>Start Analyzing Now</Link>
          </Button>
          <Button asChild variant='outline' size='lg' className='px-8 py-3 text-lg'>
            <Link to='/my-games'>View My Saved Games</Link>
          </Button>
        </div>
      </section>

      {/* Feature Section: Stockfish Power */}
      <section className='w-full max-w-6xl py-12 md:py-20 bg-card rounded-lg shadow-lg mb-16 px-6'>
        <h2 className='text-3xl font-bold text-foreground mb-6 md:mb-10 lg:text-4xl'>
          Powered by the World's Strongest Chess Engine
        </h2>
        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 items-start'>
          <div className='space-y-4'>
            <h3 className='text-2xl font-semibold text-primary'>Precision Analysis</h3>
            <p className='text-muted-foreground'>
              Leverage the raw power of Stockfish, renowned as one of the top chess engines globally, to get accurate
              evaluations and identify optimal moves.
            </p>
          </div>
          <div className='space-y-4'>
            <h3 className='text-2xl font-semibold text-primary'>Deep Tactical Insights</h3>
            <p className='text-muted-foreground'>
              Uncover hidden tactics, critical blunders, and brilliant sacrifices with deep search capabilities for any
              position.
            </p>
          </div>
          <div className='space-y-4'>
            <h3 className='text-2xl font-semibold text-primary'>Strategic Understanding</h3>
            <p className='text-muted-foreground'>
              Beyond moves, understand the strategic nuances of the board through detailed positional evaluations and
              engine lines.
            </p>
          </div>
        </div>
      </section>

      {/* Feature Section: Interactive Experience */}
      <section className='w-full max-w-6xl py-12 md:py-20 bg-background rounded-lg shadow-lg px-6'>
        <h2 className='text-3xl font-bold text-foreground mb-6 md:mb-10 lg:text-4xl'>
          Intuitive & Interactive Analysis
        </h2>
        <div className='grid grid-cols-1 md:grid-cols-2 gap-8 items-center'>
          <div className='space-y-4 text-left'>
            <h3 className='text-2xl font-semibold text-primary'>Visualize & Explore</h3>
            <p className='text-muted-foreground'>
              Interact directly with the chessboard. Make moves, undo, and jump to any point in the game to analyze
              variations.
            </p>
            <h3 className='text-2xl font-semibold text-primary'>Real-time Feedback</h3>
            <p className='text-muted-foreground'>
              Get instant evaluations as you explore different lines, helping you grasp complex positions faster.
            </p>
            <h3 className='text-2xl font-semibold text-primary'>User-Friendly Interface</h3>
            <p className='text-muted-foreground'>
              Designed with a clean and modern interface, making powerful chess analysis accessible to everyone, from
              beginners to advanced players.
            </p>
          </div>
          {/* Placeholder for an image or animation demonstrating interaction */}
          <div className='bg-muted h-64 rounded-lg flex items-center justify-center text-muted-foreground text-center'>
            [Placeholder for Interactive Board Screenshot/GIF]
          </div>
        </div>
      </section>

      {/* Final Call to Action */}
      <section className='max-w-3xl space-y-6 mt-16 text-center'>
        <h2 className='text-3xl font-bold text-foreground'>Ready to Elevate Your Game?</h2>
        <p className='text-lg text-muted-foreground'>
          Dive into deep chess analysis with our powerful tools. Start improving today!
        </p>
        <Button asChild size='lg' className='px-10 py-4 text-xl'>
          <Link to='/analyze'>Analyze Your First Position</Link>
        </Button>
      </section>
    </div>
  );
}
