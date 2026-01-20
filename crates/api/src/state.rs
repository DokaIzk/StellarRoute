//! Shared application state

use sqlx::PgPool;
use std::sync::Arc;
use tokio::sync::Mutex;

use crate::cache::CacheManager;

/// Shared API state
#[derive(Clone)]
pub struct AppState {
    /// Database connection pool
    pub db: PgPool,
    /// Redis cache manager (optional)
    pub cache: Option<Arc<Mutex<CacheManager>>>,
    /// API version
    pub version: String,
}

impl AppState {
    /// Create new application state
    pub fn new(db: PgPool) -> Self {
        Self {
            db,
            cache: None,
            version: env!("CARGO_PKG_VERSION").to_string(),
        }
    }

    /// Create new application state with cache
    pub fn with_cache(db: PgPool, cache: CacheManager) -> Self {
        Self {
            db,
            cache: Some(Arc::new(Mutex::new(cache))),
            version: env!("CARGO_PKG_VERSION").to_string(),
        }
    }

    /// Wrap in Arc for sharing across handlers
    pub fn into_arc(self) -> Arc<Self> {
        Arc::new(self)
    }

    /// Check if caching is enabled
    pub fn has_cache(&self) -> bool {
        self.cache.is_some()
    }
}
