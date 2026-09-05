'use client';

import React, { useState } from 'react';
import { AlertCircle } from 'lucide-react';
import { StudentProfile, ExperienceLevel } from '@/types';

interface ProfileFormProps {
  initialProfile?: StudentProfile;
  onSubmit: (profile: StudentProfile) => void;
  isLoading: boolean;
}

const ALL_SKILLS = [
  'Python',
  'Java',
  'C',
  'C++',
  'JavaScript',
  'TypeScript',
  'React',
  'Node.js',
  'Machine Learning',
  'Deep Learning',
  'Data Science',
  'SQL',
  'PyTorch',
  'TensorFlow',
  'Docker',
  'Flutter',
  'Tailwind CSS',
  'MongoDB',
  'Next.js',
  'OpenCV',
  'FastAPI',
];

const DOMAIN_OPTIONS = [
  'AI/ML',
  'Web Development',
  'Data Science',
  'Cybersecurity',
  'Healthcare',
  'Education',
  'Agriculture',
  'Sustainability',
  'FinTech',
  'Smart Cities & IoT',
];

const INTEREST_OPTIONS = [
  'Generative AI',
  'Computer Vision',
  'Natural Language Processing',
  'Real-time Analytics',
  'Privacy & Security',
  'Social Good',
  'Low-latency Systems',
  'Assistive Technologies',
  'Climate & Carbon Tracking',
  'Automation & Agents',
];

const EXPERIENCE_OPTIONS: { level: ExperienceLevel; label: string; desc: string }[] = [
  { level: 'Beginner', label: 'Beginner', desc: 'Know basics, need clear guidance and tutorials' },
  { level: 'Intermediate', label: 'Intermediate', desc: 'Can build projects with standard frameworks' },
  { level: 'Advanced', label: 'Advanced', desc: 'Comfortable with architecture and custom models' },
];

const TIMELINE_OPTIONS = [
  { label: '1 month', desc: 'Rapid mini-project' },
  { label: '2–3 months', desc: 'Standard semester project' },
  { label: '4–6 months', desc: 'Major final-year project' },
  { label: '6+ months', desc: 'In-depth research/capstone' },
];

const PROJECT_TYPE_OPTIONS = [
  { label: 'AI-focused', desc: 'Core machine learning or neural network solution' },
  { label: 'Full-stack', desc: 'Complete web or mobile product with backend' },
  { label: 'Research', desc: 'Literature-backed study with empirical benchmarks' },
  { label: 'Social impact', desc: 'Practical tool solving community or public issues' },
];

export const ProfileForm: React.FC<ProfileFormProps> = ({
  initialProfile,
  onSubmit,
  isLoading,
}) => {
  const [name, setName] = useState<string>(initialProfile?.name || '');
  const [college, setCollege] = useState<string>(initialProfile?.college || '');
  const [specialRequirements, setSpecialRequirements] = useState<string>(
    initialProfile?.specialRequirements || ''
  );

  const [skills, setSkills] = useState<string[]>(
    initialProfile?.skills || ['Python', 'React', 'Machine Learning', 'SQL']
  );
  const [customSkill, setCustomSkill] = useState<string>('');

  const [interests, setInterests] = useState<string[]>(
    initialProfile?.interests || ['Generative AI', 'Computer Vision']
  );

  const [domain, setDomain] = useState<string>(initialProfile?.preferredDomain || 'AI/ML');

  const [experienceLevel, setExperienceLevel] = useState<ExperienceLevel>(
    initialProfile?.experienceLevel || 'Intermediate'
  );

  const [availableTime, setAvailableTime] = useState<string>(
    initialProfile?.availableTime || '4–6 months'
  );

  const [projectPreference, setProjectPreference] = useState<string>(
    initialProfile?.projectPreference || 'AI-focused'
  );

  const [errors, setErrors] = useState<{ skills?: string; interests?: string }>({});

  const handleToggleSkill = (skill: string) => {
    if (skills.includes(skill)) {
      setSkills(skills.filter((s) => s !== skill));
    } else {
      setSkills([...skills, skill]);
      if (errors.skills) setErrors((prev) => ({ ...prev, skills: undefined }));
    }
  };

  const handleAddCustomSkill = () => {
    const trimmed = customSkill.trim();
    if (trimmed && !skills.includes(trimmed)) {
      setSkills([...skills, trimmed]);
      setCustomSkill('');
      if (errors.skills) setErrors((prev) => ({ ...prev, skills: undefined }));
    }
  };

  const handleToggleInterest = (interest: string) => {
    if (interests.includes(interest)) {
      setInterests(interests.filter((i) => i !== interest));
    } else {
      setInterests([...interests, interest]);
      if (errors.interests) setErrors((prev) => ({ ...prev, interests: undefined }));
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const newErrors: { skills?: string; interests?: string } = {};

    if (skills.length === 0) {
      newErrors.skills = 'Select at least one skill you can work with.';
    }
    if (interests.length === 0) {
      newErrors.interests = 'Select at least one area you are interested in.';
    }

    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
      return;
    }

    onSubmit({
      name: name.trim() || 'Student',
      college: college.trim(),
      specialRequirements: specialRequirements.trim(),
      skills,
      interests,
      preferredDomain: domain,
      experienceLevel,
      availableTime,
      projectPreference,
    });
  };

  return (
    <div className="mx-auto max-w-3xl px-4 py-8 sm:py-12">
      {/* Header */}
      <div className="mb-8">
        <h1 className="text-2xl font-semibold text-neutral-900 tracking-tight">
          Let&apos;s build your project profile
        </h1>
        <p className="mt-1.5 text-sm text-neutral-600">
          Tell us what you know, what you like, and how much time you have.
        </p>
      </div>

      <form onSubmit={handleSubmit} className="space-y-8">
        {/* Section 0: About You */}
        <div className="rounded-lg border border-neutral-200 bg-white p-5 sm:p-6 space-y-4">
          <h2 className="text-xs font-semibold text-neutral-500 uppercase tracking-wide">
            About You
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div>
              <label className="block text-xs font-medium text-neutral-700 mb-1">
                Your Name
              </label>
              <input
                type="text"
                value={name}
                onChange={(e) => setName(e.target.value)}
                placeholder="e.g. Manish Nishad"
                className="w-full rounded-md border border-neutral-200 px-3 py-2 text-xs text-neutral-900 placeholder-neutral-400 focus:outline-none focus:border-neutral-400"
              />
            </div>
            <div>
              <label className="block text-xs font-medium text-neutral-700 mb-1">
                College / University
              </label>
              <input
                type="text"
                value={college}
                onChange={(e) => setCollege(e.target.value)}
                placeholder="e.g. National Institute of Technology"
                className="w-full rounded-md border border-neutral-200 px-3 py-2 text-xs text-neutral-900 placeholder-neutral-400 focus:outline-none focus:border-neutral-400"
              />
            </div>
          </div>
          <div>
            <label className="block text-xs font-medium text-neutral-700 mb-1">
              Special College Guidelines (Optional)
            </label>
            <input
              type="text"
              value={specialRequirements}
              onChange={(e) => setSpecialRequirements(e.target.value)}
              placeholder="e.g. IEEE paper format, must include dataset with 10k+ rows, offline lab demo"
              className="w-full rounded-md border border-neutral-200 px-3 py-2 text-xs text-neutral-900 placeholder-neutral-400 focus:outline-none focus:border-neutral-400"
            />
          </div>
        </div>

        {/* Section 1: Your Skills */}
        <div className="rounded-lg border border-neutral-200 bg-white p-5 sm:p-6">
          <div className="flex items-center justify-between mb-3">
            <div>
              <h2 className="text-sm font-semibold text-neutral-900">1. Your Skills</h2>
              <p className="text-xs text-neutral-500 mt-0.5">What can you work with?</p>
            </div>
            <span className="text-xs text-neutral-500">{skills.length} selected</span>
          </div>

          <div className="flex flex-wrap gap-1.5 pt-1">
            {ALL_SKILLS.map((skill) => {
              const isSelected = skills.includes(skill);
              return (
                <button
                  key={skill}
                  type="button"
                  onClick={() => handleToggleSkill(skill)}
                  className={`px-2.5 py-1.5 rounded-md text-xs font-medium transition-colors border ${
                    isSelected
                      ? 'border-neutral-900 bg-neutral-900 text-white'
                      : 'border-neutral-200 bg-white text-neutral-700 hover:border-neutral-300 hover:bg-neutral-50'
                  }`}
                >
                  {skill}
                </button>
              );
            })}
          </div>

          {/* Custom skill add */}
          <div className="mt-3.5 flex items-center gap-2 max-w-sm">
            <input
              type="text"
              value={customSkill}
              onChange={(e) => setCustomSkill(e.target.value)}
              onKeyDown={(e) => {
                if (e.key === 'Enter') {
                  e.preventDefault();
                  handleAddCustomSkill();
                }
              }}
              placeholder="+ Add another skill..."
              className="flex-1 rounded-md border border-neutral-200 px-3 py-1.5 text-xs text-neutral-900 placeholder-neutral-400 focus:outline-none focus:border-neutral-400"
            />
            {customSkill.trim() && (
              <button
                type="button"
                onClick={handleAddCustomSkill}
                className="rounded-md bg-neutral-100 border border-neutral-200 px-2.5 py-1.5 text-xs font-medium text-neutral-800 hover:bg-neutral-200"
              >
                Add
              </button>
            )}
          </div>

          {errors.skills && (
            <div className="mt-2 text-xs text-red-600 flex items-center gap-1">
              <AlertCircle className="h-3 w-3" />
              <span>{errors.skills}</span>
            </div>
          )}
        </div>

        {/* Section 2: Your Interests */}
        <div className="rounded-lg border border-neutral-200 bg-white p-5 sm:p-6">
          <div className="flex items-center justify-between mb-3">
            <div>
              <h2 className="text-sm font-semibold text-neutral-900">2. Your Interests</h2>
              <p className="text-xs text-neutral-500 mt-0.5">What are you interested in?</p>
            </div>
            <span className="text-xs text-neutral-500">{interests.length} selected</span>
          </div>

          <div className="flex flex-wrap gap-1.5 pt-1">
            {INTEREST_OPTIONS.map((item) => {
              const isSelected = interests.includes(item);
              return (
                <button
                  key={item}
                  type="button"
                  onClick={() => handleToggleInterest(item)}
                  className={`px-2.5 py-1.5 rounded-md text-xs font-medium transition-colors border ${
                    isSelected
                      ? 'border-neutral-900 bg-neutral-900 text-white'
                      : 'border-neutral-200 bg-white text-neutral-700 hover:border-neutral-300 hover:bg-neutral-50'
                  }`}
                >
                  {item}
                </button>
              );
            })}
          </div>

          {errors.interests && (
            <div className="mt-2 text-xs text-red-600 flex items-center gap-1">
              <AlertCircle className="h-3 w-3" />
              <span>{errors.interests}</span>
            </div>
          )}
        </div>

        {/* Section 3: Domain & Experience */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          {/* Domain */}
          <div className="rounded-lg border border-neutral-200 bg-white p-5">
            <h2 className="text-sm font-semibold text-neutral-900">What do you want to build for?</h2>
            <p className="text-xs text-neutral-500 mt-0.5 mb-3">Target application domain</p>
            <div className="space-y-1">
              {DOMAIN_OPTIONS.slice(0, 6).map((dom) => (
                <button
                  key={dom}
                  type="button"
                  onClick={() => setDomain(dom)}
                  className={`w-full text-left px-3 py-2 rounded-md text-xs font-medium transition-colors border ${
                    domain === dom
                      ? 'border-neutral-900 bg-neutral-50 text-neutral-900 font-semibold'
                      : 'border-transparent text-neutral-600 hover:bg-neutral-50'
                  }`}
                >
                  {dom}
                </button>
              ))}
            </div>
          </div>

          {/* Experience */}
          <div className="rounded-lg border border-neutral-200 bg-white p-5">
            <h2 className="text-sm font-semibold text-neutral-900">3. Your Experience</h2>
            <p className="text-xs text-neutral-500 mt-0.5 mb-3">How comfortable are you with coding?</p>
            <div className="space-y-2">
              {EXPERIENCE_OPTIONS.map((item) => (
                <button
                  key={item.level}
                  type="button"
                  onClick={() => setExperienceLevel(item.level)}
                  className={`w-full text-left p-2.5 rounded-md text-xs transition-colors border ${
                    experienceLevel === item.level
                      ? 'border-neutral-900 bg-neutral-50 text-neutral-900'
                      : 'border-neutral-200 bg-white text-neutral-600 hover:bg-neutral-50'
                  }`}
                >
                  <div className="font-semibold text-neutral-900">{item.label}</div>
                  <div className="text-[11px] text-neutral-500 mt-0.5">{item.desc}</div>
                </button>
              ))}
            </div>
          </div>
        </div>

        {/* Section 4: Available Time & Project Preference */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          {/* Available Time */}
          <div className="rounded-lg border border-neutral-200 bg-white p-5">
            <h2 className="text-sm font-semibold text-neutral-900">4. Your Available Time</h2>
            <p className="text-xs text-neutral-500 mt-0.5 mb-3">How much time do you have?</p>
            <div className="space-y-2">
              {TIMELINE_OPTIONS.map((item) => (
                <button
                  key={item.label}
                  type="button"
                  onClick={() => setAvailableTime(item.label)}
                  className={`w-full text-left p-2.5 rounded-md text-xs transition-colors border ${
                    availableTime === item.label
                      ? 'border-neutral-900 bg-neutral-50 text-neutral-900'
                      : 'border-neutral-200 bg-white text-neutral-600 hover:bg-neutral-50'
                  }`}
                >
                  <div className="font-semibold text-neutral-900">{item.label}</div>
                  <div className="text-[11px] text-neutral-500 mt-0.5">{item.desc}</div>
                </button>
              ))}
            </div>
          </div>

          {/* Project Type */}
          <div className="rounded-lg border border-neutral-200 bg-white p-5">
            <h2 className="text-sm font-semibold text-neutral-900">5. What You Want to Build</h2>
            <p className="text-xs text-neutral-500 mt-0.5 mb-3">What kind of project do you want?</p>
            <div className="space-y-2">
              {PROJECT_TYPE_OPTIONS.map((item) => (
                <button
                  key={item.label}
                  type="button"
                  onClick={() => setProjectPreference(item.label)}
                  className={`w-full text-left p-2.5 rounded-md text-xs transition-colors border ${
                    projectPreference === item.label
                      ? 'border-neutral-900 bg-neutral-50 text-neutral-900'
                      : 'border-neutral-200 bg-white text-neutral-600 hover:bg-neutral-50'
                  }`}
                >
                  <div className="font-semibold text-neutral-900">{item.label}</div>
                  <div className="text-[11px] text-neutral-500 mt-0.5">{item.desc}</div>
                </button>
              ))}
            </div>
          </div>
        </div>

        {/* Bottom CTA */}
        <div className="pt-2">
          <button
            type="submit"
            disabled={isLoading}
            className="w-full flex items-center justify-center gap-2 rounded-md bg-neutral-900 py-3 px-4 text-xs font-semibold text-white hover:bg-neutral-800 disabled:opacity-50 transition-colors"
          >
            <span>{isLoading ? 'Finding projects that fit you...' : 'Find My Projects →'}</span>
          </button>
        </div>
      </form>
    </div>
  );
};
