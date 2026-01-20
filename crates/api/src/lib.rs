//! StellarRoute API Server
//!
//! Provides REST API endpoints for price quotes and orderbook data.

pub mod docs;
pub mod error;
pub mod handlers;
pub mod middleware;
pub mod models;
pub mod routes;
pub mod server;
pub mod state;

pub use docs::ApiDoc;
pub use error::{ApiError, Result};
pub use server::{Server, ServerConfig};
pub use state::AppState;
