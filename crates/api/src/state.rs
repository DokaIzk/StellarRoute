//! Shared application state

use sqlx::PgPool;
use std::sync::Arc;

/// Shared API state
#[derive(Clone)]
pub struct AppState {
    /// Database connection pool
    pub db: PgPool,
    /// API version
    pub version: String,
}

impl AppState {
    /// Create new application state
    pub fn new(db: PgPool) -> Self {
        Self {
            db,
            version: env!("CARGO_PKG_VERSION").to_string(),
        }
    }

    /// Wrap in Arc for sharing across handlers
    pub fn into_arc(self) -> Arc<Self> {
        Arc::new(self)
    }
}
