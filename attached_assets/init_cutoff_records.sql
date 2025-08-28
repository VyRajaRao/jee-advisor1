-- SQL for cutoffs table
CREATE TABLE IF NOT EXISTS cutoff_records (
  id VARCHAR PRIMARY KEY DEFAULT gen_random_uuid(),
  year INTEGER NOT NULL,
  institute TEXT NOT NULL,
  branch TEXT NOT NULL,
  category TEXT NOT NULL,
  gender_quota TEXT NOT NULL,
  opening_rank INTEGER,
  closing_rank INTEGER NOT NULL,
  created_at TIMESTAMP DEFAULT NOW()
);

-- Indexes for fast queries
CREATE INDEX IF NOT EXISTS idx_cutoff_year ON cutoff_records(year);
CREATE INDEX IF NOT EXISTS idx_cutoff_institute ON cutoff_records(institute);
CREATE INDEX IF NOT EXISTS idx_cutoff_branch ON cutoff_records(branch);
CREATE INDEX IF NOT EXISTS idx_cutoff_category ON cutoff_records(category);
CREATE INDEX IF NOT EXISTS idx_cutoff_gender_quota ON cutoff_records(gender_quota);
