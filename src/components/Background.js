import MovieCard from "./MovieCard"

export default function Background() {
    return (
        <div style={{ backgroundImage: `url(/fondo.jpg)`, width: '100vw', height: '100vh' }}>
            <MovieCard />
        </div>
    );
}